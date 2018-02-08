let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        req.body.id = id;
        messages.push(req.body);
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === +req.params.id) {
                messages[i].text = req.body.text || messages[i].text;
                messages[i].time = req.body.time || messages[i].time;
                return res.status(200).send(messages);
            }
        }
    },
    delete: (req, res) => {
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === +req.params.id) {
                messages.splice(i, 1);
                return res.status(200).send(messages);
            }
        }
    }
}