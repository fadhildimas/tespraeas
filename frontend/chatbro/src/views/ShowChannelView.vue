<script setup>
import { Ref } from 'vue';
import axios from 'axios';

const channels = ref();

const getData = async()=>{
    try{
        const res = await axios.get('http://localhost:3000/api/channels',{
            withCredentials:true
        })
        channels.value=res.data;
        console.log(res);
    }catch(e){e.message};
}
getData();

const nameChannel = ref('');
const createChannel = async()=>{
    try{
        const res = await axios.post('http://localhost:3000/api/channels',{
            channelName: nameChannel.value
        }, {
            withCredentials:true
        })
        console.log(res);
        alert('Create Success')
    }catch(e){e.message};
}

const selectedId = ref('');
const nameUpdateChannel = ref('');
const updateChannel = async()=>{
    try{
        const res = await axios.patch('http://localhost:3000/api/channels/${selectedId.value}',{
            channelName: nameUpdateChannel.value
        }, {
            withCredentials:true
        })
        console.log(res);
        alert('Update Success')
    }catch(e){e.message};
}

const deleteChannel = async()=>{
    try{
        const res = await axios.delete('http://localhost:3000/api/channels/${selectedId.value}',{
            channelName: nameChannel.value
        }, {
            withCredentials:true
        })
        console.log(res);
        alert('Delete Success')
    }catch(e){e.message};
}
</script>

<template>
    Channel
    
    <div v-for="item in channels.docs">
        <button @click="()=>selectedId=item.id">{{item.channelName}}</button>
    </div>
    <br/>
    Create Channel
    <form @submit="createChannel">
        <input type="text">
        <button type="submit">Create</button>
    </form>
    <br/>
    Select id Channel : {{ selectedId }}
    Update Channel
    <form @submit="updateChannel">
        <input type="text" v-model="nameUpdateChannel">
        <button type="submit">Update</button>
    </form>
    <br/>
    <form @submit="deleteChannel">
        <button type="submit">Delete</button>
    </form>
</template>