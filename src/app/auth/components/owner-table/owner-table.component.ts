import { Component } from '@angular/core';
import { Owner } from '../../interfaces/owner.interfaces';
import { ModalService } from '../../../shared/services/modal.service';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrl: './owner-table.component.css',
})
export class OwnerTableComponent {
  public isOpenModal: boolean = false;
  public owners: Owner[] = [];
  public ownerToEdit: Owner | null = null;

  constructor(
    private modalService: ModalService,
    private ownerService: OwnerService
  ) {
    ownerService.getCurrentData();
  }

  ngOnInit() {
    this.modalService.currentIsOpen.subscribe((is) => {
      this.isOpenModal = is;
    });

    this.ownerService.currentOwners.subscribe((owners) => {
      this.owners = owners;
    });
  }

  handleDeleteOwner(id: string) {
    const resp = confirm('Are you sure you want to delete this owner?');
    if (!resp) return;
    this.ownerService.deleteOwner(id);
  }

  handleOpenModal() {
    this.ownerToEdit = null;
    this.modalService.changeValue(true);
  }

  handleOpenModalToEdit(data: Owner) {
    this.ownerToEdit = data;
    this.modalService.changeValue(true);
  }
}
