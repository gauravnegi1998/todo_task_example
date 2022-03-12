import React, { useState, FunctionComponent } from 'react';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from '../CardComponent';
import _ from 'lodash';
import CardContainer, { MainContainer, Title } from './Dashboard.style';
import DialogComponent from '../DialogComponent';

export interface AppIProps {
    id: string;
    title: string;
    description: string;
}

const Dashboard: FunctionComponent = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState<AppIProps[]>([]);
    const [editData, setEditData] = useState<AppIProps | null>(null);
    const [doneTask, setDoneTask] = useState<{ id: string, done: boolean }[]>([]);

    //delete task function
    function _deleteTask(taskId: string = "") {
        let remainData = _.reject(data, { id: taskId });
        setData([...remainData]);
    }

    //edit task function
    function _editTask(taskId: string = "") {
        let editValue = _.find(data, { id: taskId });
        console.log(editValue);
        if (editValue) {
            setEditData(editValue);
        }
        setOpen(true);
    }

    //done Task Function

    function _donTask(taskId: string = "") {
        let cardData = [];
        let index = _.find(doneTask, { id: taskId });
        if (index) {
            let remain = _.reject(doneTask, index);
            cardData = [...remain, { id: taskId, done: !(index['done']) }];
        } else {
            cardData = [...doneTask, { id: taskId, done: true }];
        }
        setDoneTask(cardData);
    }

    return (
        <>
            <Header setOpen={setOpen} />
            <MainContainer className="cards_cotainer">
                <Title>{data?.length > 0 ? "All Task" : "No Task Found"}</Title>
                <CardContainer>
                    {_.map(data, (row: AppIProps, index: number) => (
                        <CardComponent
                            content={{ ...row, index: index + 1 }}
                            doneTask={doneTask}
                            deleteFunction={(value) => _deleteTask(value)}
                            editFunction={(value) => _editTask(value)}
                            doneFunction={(value) => _donTask(value)}
                            key={index + 1} />
                    ))}
                </CardContainer>
                <DialogComponent
                    id="create_task_section"
                    title={editData ? "Edit Task" : 'Create Task'}
                    open={open}
                    setOpen={setOpen}
                    editContent={{ editData, setEditData }}
                    setData={setData}
                    data={data} />
            </MainContainer>
        </>

    );
}

export default Dashboard;
