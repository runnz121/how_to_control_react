import React from 'react';
import {connect} from 'react-redux';
import Sample from'../components/Sample';
import{getPost, getUsers} from'../modules/sample';

const {useEffect} = React;
const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers,
}) => {
    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);
    return (
        <Sample
        post={post}
        users={users}
        loadingPost={loadingPost}
        loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_POST']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);







function* generatiorFunction() {
    console.log('1');
    yield 1;
    console.log('2');
    yield 2;
    console.log('3');
    yield 3;
    return 4;
}

const generator = generatiorFunction();

generator.next();
generator.next();
generator.next();
generator.next();