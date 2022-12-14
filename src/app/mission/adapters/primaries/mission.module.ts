import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MissionCreateComponent } from './mission-create/mission-create.component';
import { MissionRoutes } from '../../configuration/mission.routes';
import { ICreateAMission } from '../../usecases/ICreateAMission';
import { MissionDIProvider } from '../../configuration/missionDI.provider';
import { MissionDIFactory } from '../../configuration/missionDI.factory';
import { ISearchMissions } from '../../usecases/ISearchMissions';
import { MissionsComponent } from './missions/missions.component';
import { ICompleteAMission } from '../../usecases/ICompleteAMission';
import { PokemonModule } from 'src/app/pokemon/adapters/primaries/pokemon.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MissionRoutes),
    HttpClientModule,
    PokemonModule,
  ],
  declarations: [MissionCreateComponent, MissionsComponent],
  exports: [MissionCreateComponent],
  providers: [
    {
      provide: MissionDIProvider.ICreateAMission,
      useFactory: (http: HttpClient) =>
        new ICreateAMission(MissionDIFactory.missionLoader(http)),
      deps: [HttpClient],
    },
    {
      provide: MissionDIProvider.ISearchMissions,
      useFactory: (http: HttpClient) =>
        new ISearchMissions(MissionDIFactory.missionLoader(http)),
      deps: [HttpClient],
    },
    {
      provide: MissionDIProvider.ICompleteAMission,
      useFactory: (http: HttpClient) =>
        new ICompleteAMission(MissionDIFactory.missionLoader(http)),
      deps: [HttpClient],
    },
  ],
})
export class MissionModule {}
