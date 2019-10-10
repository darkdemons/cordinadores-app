import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { SeccionesService } from 'src/app/services/secciones.service';
import { Router } from '@angular/router';




/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Primer semestre',
    children: [
      {name: '01S-2614-D1'}
    ]
  }, {
    name: 'Sexto semestre',
    children: [
      {
        name: '06S-2614-D1'
      },
    ]
  },
];


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})

export class SeccionesComponent {


  private _transformer = (node: FoodNode, level: number) => {  // codigo materials para expandir el arbol
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>( // mas codigo materials
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener); // codigo materials :V 

  constructor( public seccionesService:SeccionesService, private router:Router) {
    this.dataSource.data = TREE_DATA; // esta es la data como tal 
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;



   async cargarHorario(code){
    await this.seccionesService.getSeccion(code)
    this.router.navigateByUrl('/horario')
  }
}




 

  
    
 
