import ProjectSchema from '../models/Project.js';

// READ Projects
export const getProjects = async (req, res) => {
    try {
        const getProject = await ProjectSchema.find();

        console.log(getProject, "here");

        return res.status(200).json(getProject);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

// CREATE Projects
export const postProjects = async (req, res) => {
    const { title, description, manager, employee } = req.body;

	try {
		const project = await ProjectSchema.create({ 
			title, description, manager, employee 
		});

		return res.status(200).json(project);
	} catch (err) {
		console.log(err);
		 return res.status(500).json({ err: "Something went wrong" });
	}
};

// UPDATE Projects
export const updateProjects = async (req, res) => {
	const fixProject = { title: req.body.title, description: req.body.description };

	try {
		const project = await ProjectSchema.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: { 
				title: fixProject.title, 
				description: fixProject.description,
				modified: Date.now()
				} 
			},
			{ new: true }
		);

		await project.save();
			
		return res.json({message: "Successfully updated"});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ err: "Something went wrong" })
	}
}

// DELETE Projects
export const deleteProjects = async (req, res) => {
	const id = req.params.id;
	try {
		await ProjectSchema.findByIdAndDelete(id);

		return res.json({message: "Successful deletion!"})
		
	} catch (err) {
		console.log(err);
		return res.status(500).json({ err: "Something went wrong" })
	}
};