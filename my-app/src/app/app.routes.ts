import {Routes } from '@angular/router';

import { Personal } from './components/personal/personal';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Studies } from './components/studies/studies';
import { Contacts } from './components/contacts/contacts';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'personal', pathMatch: 'full' },
    {path: 'personal', component: Personal},
    {path: 'skills', component: Skills},
    {path: 'projects', component: Projects},
    {path: 'studies', component: Studies},
    {path: 'contacts', component: Contacts}
]