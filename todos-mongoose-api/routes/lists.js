import express from 'express';
import mongoose from 'mongoose';
import List from '../models/List.js';

const router = express.Router();
// const MongoURI = 'mongodb://127.0.0.1:27017/todos';
const MongoURI = 'mongodb+srv://amycarolparks318_db_user:ZPq24BsliBzE10k8@todos.gjqil2r.mongodb.net/?appName=todos/db1&retryWrites=true&w=majority';


router.use(express.json())

router.get('/', async (req, res) => {
    await mongoose.connect(MongoURI, { serverSelectionTimeoutMS: 3000 })
    const doc = await List.find();
    res.send(doc);

});

router.post('/', async (req, res) => {
    try {
        await mongoose.connect(MongoURI, { serverSelectionTimeoutMS: 3000 });
        const doc = await List.create(req.body);
        // const doc = new List(req.body);
        if (doc) {
            res.send(doc);
            res.status(204).end();
            console.log(`Created new list with following information: ${doc}`);
        }
        else {
            res.status(404).end();
            console.log(`Unable to create list: ${res.status}`);
        }

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    } finally {
        await mongoose.connection.close();
    }
});

router.patch('/', async (req, res) => {
    try {
        await mongoose.connect(MongoURI, { serverSelectionTimeoutMS: 3000 });
        const doc = await List.findByIdAndUpdate(req.body._id, {
            $set: {
                name: req.body.name,
                image: req.body.image, date: req.body.date, tasks: req.body.tasks
            }
        });
        if (doc && doc !== undefined) {
            console.log(`The list updated was ID: ${req.body._id}`);
            res.status(204).end();
        }
        else {
            res.status(404).end();
            console.log(`Unable to update list: ${res.status}`);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    } finally {
        await mongoose.connection.close();
    }
});

router.delete('/', async (req, res) => {
    try {
        await mongoose.connect(MongoURI, { serverSelectionTimeoutMS: 3000 });

        const doc = await List.findByIdAndDelete(req.body._id);
        if(doc && doc !== undefined)
        {
            console.log(`Deleted ${req.body._id}`);
            res.status(200).end();
        }
        else {
            res.status(404).end();
            console.log(`Unable to delete list: ${res.status}`);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    } finally {
        await mongoose.connection.close();
    }
});


export default router;