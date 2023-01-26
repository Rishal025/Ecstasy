const router = require('express').Router();
const Conversation = require('../models/conversation');
const Counselor = require('../models/counselor')
const User = require('../models/user')

router.post('/chat', async(req,res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });

    try{
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation)
    } catch (err) {
        res.status(500).json(err);
    }
}); 

router.get('/chat/:userId', async (req, res) => {
    console.log(req.params.userId);
    try{
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId]},
        });
        res.status(200).json(conversation); 
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/chat-user/:id', async(req, res) => {
    console.log('reached here');
    console.log(req.params.id);

    try{
        const user = await User.findOne({ _id: req.params.id });
        console.log('user');
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.get('/chat-counselor/:id', async(req, res) => {
    console.log('reached here');
    console.log(req.params.id);

    try{
        const counselor = await Counselor.findOne({ _id: req.params.id });
        console.log('counselor');
        console.log(counselor);
        res.status(200).json(counselor);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = router;