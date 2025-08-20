import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Component } from '@angular/core';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    // {
    //     path:'',
    //     component:Layout,
    //     children:[
    //         {
    //             path:'dashboard',                   // this is another way to navigate another page.
    //             component:Dashboard
    //         }
    //     ]
    // }
    {
        path:'dashboard',
        component:Dashboard    //this is simpler way when you are in beginner stage.
    }
];
