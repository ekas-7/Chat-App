const hello = async (req,res) =>{
    try {
        res.status(200).json({msg :"hello"});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports= {hello};