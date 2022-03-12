import React, { FunctionComponent } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import _ from 'lodash';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface IProps {
    content: { index: number, id: string, title: string, description: string };
    deleteFunction: (id: string) => void;
    editFunction: (id: string) => void;
    doneFunction: (id: string) => void;
    doneTask: { id: string, done: boolean }[];
}

const CardComponent: FunctionComponent<IProps> = ({ content, deleteFunction, editFunction, doneFunction, doneTask }) => {

    const { id, index, title, description } = content;
    const done = _.find(doneTask, { id: id })?.done;

    return (
        // <CardComponentStyle>
        <Card sx={{ maxWidth: 345 }} className="m-5 ">
            <CardMedia
                component="img"
                height="140"
                image={`https://picsum.photos/id/${index}/300`}
                alt="green iguana"
            />
            <CardContent>
                <Typography className={done ? `strick_class` : ""} gutterBottom variant="h4" component="div">{title}</Typography>
                <Typography className={done ? `strick_class` : ""} gutterBottom variant="body2" component="div" color="text.secondary">{description}</Typography>
                {done &&
                    <Typography className="success_tick" gutterBottom variant="body2" component="div" color="text.secondary">
                        <CheckCircleIcon />
                        <p>this task is completed</p>
                    </Typography>
                }
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => editFunction(id)}>Edit</Button>
                <Button size="small" onClick={() => deleteFunction(id)}>Delete</Button>
                <Button size="small" onClick={() => doneFunction(id)} > {done ? "Re-Assign" : "Done"}</Button>
            </CardActions>
        </Card>
        // </CardComponentStyle>
    );
}


export default CardComponent;
