import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from './services/api';
import { useEffect, useState } from 'react';

export default function App(){

    const [project, setProject] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProject(response.data);
        })
    });

    async function AddProject(){
        const response = await api.post('projects',{
            title: `Novo Projeto ${data.now()}`,
            owner: 'Marcus Oliveira'
        });

        setProject([...project, response.data])
    }


    return 
    (
        <>
            <statusbar barStyle ='light-content' backgroundColor='#7153c1'></statusbar>
            <SafeAreaView>
                <FlatList
                    style={style.container}
                    data={project}
                    keyExtractor={project => project.id}
                    renderItem={({item: project}) => (
                    <Text style={style.project}>{item.title}</Text>
                    )}
                />

            </SafeAreaView>
            />
           <TouchableOpacity activeOpacity={0.5} style={style.btn} onPress={AddProject} >
               <text style={style.btntext}>Adicionar projeto</text>
           </TouchableOpacity>
           {/* <view style={style.container}>
                {project.map(project =>  
                   <Text style={StyleSheet.project} key={project.id}>{project.title}</Text>)}
                   );
                </view>        */}
        </>
    );
            
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    project: {
        color: '#FFF',
        fontSize: 20,
        fontWeightt:'bold'
    },
    btn:
    {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'

    },
    btntext:
    {
        fontWeight: 'bold',
        fontSize: 16,

    },
});