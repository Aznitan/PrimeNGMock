import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TeacherProfileComponent } from './Components/teacher-profile/teacher-profile.component';

export const routes: Routes = [

    {
        path: 'teacherprofile',
        component: TeacherProfileComponent
    }
];