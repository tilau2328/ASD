import {Component, EventEmitter, Input, Output} from "@angular/core";
import { faPlus, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-list',
  templateUrl: './item.list.component.html',
  styleUrls: ['./item.list.component.css']
})
export class ItemListComponent {
  faTimes = faTimes;
  faEdit = faEdit;
  faPlus = faPlus;
  filter = '';

  @Input() items: any[] = [];
  @Input() title: string = 'name';
  @Input() params: string[] = ['name'];
  @Output() onClick: EventEmitter<any>;
  @Output() openModel: EventEmitter<any>;
  @Output() onDelete: EventEmitter<string>;

  getTitle(item: any) {
    return item[this.title];
  }
}
