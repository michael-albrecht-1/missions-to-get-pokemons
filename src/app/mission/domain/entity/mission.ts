import { Uuid } from '../../../shared/value-object/uuid';
import { MissionReward } from '../../shared/MissionReward';
import { MissionStatus } from '../../shared/MissionStatus';
import { MissionSnapshot } from './mission.snapshot';

export class Mission {
  #uuid: string = Uuid.random().toString();
  #name!: string;
  #description!: string;
  #rewards!: MissionReward[];

  constructor(_name: string, _description: string, _rewards: MissionReward[]) {
    if (!_rewards.length) {
      throw new Error('Mission creation failed, there is no reward');
    }
    if (!_name) {
      throw new Error('Mission creation failed, name is missing');
    }
    this.#name = _name;
    this.#description = _description;
    this.#rewards = _rewards;
  }

  public snapshot(): MissionSnapshot {
    return {
      uuid: this.#uuid,
      name: this.#name,
      description: this.#description,
      rewards: this.#rewards,
    };
  }
}