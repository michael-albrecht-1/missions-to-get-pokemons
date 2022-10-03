import { Observable, of } from 'rxjs';
import { Usecase } from 'src/app/shared/usecase.interface';
import { MissionSnapshot } from '../domain/entity/mission.snapshot';
import { MissionLoader } from '../domain/loaders/mission.loader';

export class ISearchMissions implements Usecase<Observable<MissionSnapshot[]>> {
  constructor(private missionSource: MissionLoader) {}

  execute(): Observable<MissionSnapshot[]> {
    return this.missionSource.search();
  }
}