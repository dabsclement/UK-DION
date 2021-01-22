router.post("/getQuery", async (req, res) => {
    const { Query } = req.body;
    try {
         const queryQearch = await Query.find()
        if (!queryQearch) 
        return
        res.status(404).send(message: "passing the required parameters")
        else {
        res.status(200).json(queryQearch)
        }
    }
    catch (error){
        return res.status(500).json({error});
    }

    });
