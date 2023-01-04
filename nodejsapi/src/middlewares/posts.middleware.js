const validateBody = (req, res, next) => {
   const { body } = req;

    if(body.title == undefined) {
     return res.status(400).json({ message: "The field 'title' is required" });
    }
    if(body.title == '') {
     return res.status(400).json({ message: "The field 'title' cannot be empty" });
    }
    if(body.bodyContent == undefined) {
     return res.status(400).json({ message: "The field 'bodyContent' is required" });
    }
    if(body.bodyContent == '') {
     return res.status(400).json({ message: "The field 'bodyContent' cannot be empty" });
    }
    if(body.tag == undefined) {
     return res.status(400).json({ message: "The field 'tag' is required" });
    }
    if(body.tag == '') {
     return res.status(400).json({ message: "The field 'tag' cannot be empty" });
    }

    next();

};

const validateTest = () => {
  return console.log('teste');
}

const middleware = { validateBody, validateTest};

export default middleware;