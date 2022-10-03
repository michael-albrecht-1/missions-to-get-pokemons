import { Observable } from 'rxjs';
import { Usecase } from 'src/app/shared/usecase.interface';
import { Mission } from '../domain/entity/mission';
import { MissionSnapshot } from '../domain/entity/mission.snapshot';
import { MissionLoader } from '../domain/loaders/mission.loader';
import { MissionReward } from '../shared/MissionReward';

export class ICreateAMission implements Usecase<Observable<MissionSnapshot>> {
  constructor(private missionSource: MissionLoader) {}

  public execute(
    _name: string,
    _description: string,
    _rewards: MissionReward[]
  ): Observable<MissionSnapshot> {
    const mission = new Mission(_name, _description, _rewards).snapshot();
    return this.missionSource.post(mission);
  }
}
