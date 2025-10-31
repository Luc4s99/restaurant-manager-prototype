import { Component, Inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA  } from "@angular/material/dialog";
import { ModalActionsService } from '../services/modal-actions.service';

@Component({
  selector: 'app-modal-confirmacao',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './modal-confirmacao.component.html',
  styleUrl: './modal-confirmacao.component.scss'
})
export class ModalConfirmacaoComponent {

  constructor (
    public dialogRef: MatDialogRef<ModalConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private modalService: ModalActionsService
  ) {

    console.log(this.modalData);
  }

  modalAction() {

    this.modalService.modalAction(this.modalData);
    this.closeModal();
  }

  closeModal() {

    this.dialogRef.close();
  }
}
