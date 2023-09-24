
import { Component  } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";
import { MatDialog } from '@angular/material/dialog';
import { ProcessInputDialogComponent } from '../process-input-dialog/process-input-dialog.component';

@Component({
  selector: 'app-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.css'],
})
export class StepperContentComponent {
  phases = [
    { label: '0', message: 'Stock', endpoint: 'stock' },
    { label: '1', message: 'Preparation area', endpoint: 'preparation_area' },
    { label: '2', message: 'Bunker', endpoint: 'bunker' },
    { label: '3', message: 'Tunnel', endpoint: 'tunnel' },
    { label: '4.1', message: 'Incubation', endpoint: 'grow_room_record?processType=Incubation' },
    { label: '4.2', message: 'Casing', endpoint: 'grow_room_record?processType=Casing' },
    { label: '4.3', message: 'Induction', endpoint: 'grow_room_record?processType=Induction' },
    { label: '4.4', message: 'Harvest', endpoint: 'grow_room_record?processType=Harvest' },
  ];
  calculateStepperLabel(index: number): string {
    if (index === 0) {
      return '0';
    } else if (index < 4) {
      return index.toString();
    } else {
      return '4.' + (index - 3).toString();
    }
  }
  constructor(private communicationService: CommunicationService, private dialog: MatDialog) {
  }

  //Funcion aun no usada correctamente, al usarla debe de aparecer el popup
  activeObject() {
    this.communicationService.triggerShowPopupButtonClick();
  }

  record: string = '';
  openInputDialog(): void {
    const dialogRef = this.dialog.open(ProcessInputDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Recorded information:', result);
      if (result) {
        this.record = result;
      }
    });
  }
}
