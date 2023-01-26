const router = require('express').Router();
const Message = require('../models/message');

router.post('/message', async(req, res) => {
    const newMessage = new Message(req.body)

    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/message/:conversationId', async(req, res) => {
  console.log('get conversations');
  console.log(req.params.conversationId);
    try {
      const messages = await Message.find({
        conversationId: req.params.conversationId,
      })
      res.status(200).json(messages)
    } catch (err) {
      res.status(500).json(err)
    }
});

module.exports = router;