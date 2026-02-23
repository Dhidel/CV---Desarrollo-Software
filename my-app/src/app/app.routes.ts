import {Routes } from '@angular/router';

import { Personal } from './components/personal/personal';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Studies } from './components/studies/studies';
import { Contacts } from './components/contacts/contacts';
import { NgModule } from '@angular/core';
import { NxtBoardDetail } from './components/projects/nxt-board-detail/nxt-board-detail';
import { CvDetail } from './components/projects/cv-detail/cv-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'personal', pathMatch: 'full' },
    {path: 'personal', component: Personal},
    {path: 'skills', component: Skills},
    {
    path: 'projects',
    component: Projects,
    children: [
      { path: 'nxt-board', component: NxtBoardDetail},
      { path: 'cv', component: CvDetail }
    ]
  },
    {path: 'studies', component: Studies},
    {path: 'contacts', component: Contacts}
]