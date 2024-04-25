import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html'
})

export class ListComponent {

    @Input()
    public characterList: Character[] = [
      {
        'id' : '',
        'name': 'Trunks',
        'power': 10,
      }]


    @Output()
    public onDeleteId: EventEmitter<string> = new EventEmitter();
    // onDeleteId = Index value : number

    onDeleteCharacter(id: string): void {
      // TODO: Emitir el ID del personaje
      // console.log({'index' : index});
      // this.characterList.splice(index, 1)

      this.onDeleteId.emit(id)
    }
}
