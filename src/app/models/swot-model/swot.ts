import { Associate } from './../associate-model/associate.model';
import { SwotItem } from './swot-item';
import { Manager } from '../manager-model/manager';
import { ProgressReport } from './progress-report';

export class Swot {
  id?: number;
  associate: Associate;
  manager: Manager;
  createdOn: Date;
  lastModified: Date;
  description: string;

  analysisItems: SwotItem[];
  progressReports: ProgressReport[];

  constructor() {
    this.createdOn = new Date();
    this.lastModified = new Date();
  }
}
