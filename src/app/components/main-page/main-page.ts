import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardImage, MatCardActions } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { DialogOverviewExampleDialog } from '../contact-dialog/contact-dialog';

@Component({
  selector: 'main-page',
  templateUrl: 'main-page.html',
  styleUrl: 'main-page.scss',
  imports: [MatCard, MatCardContent, MatCardImage, MatCardActions, MatButton, MatIcon]
})
export class MainPage{

    profile_picture: string = "https://files.catbox.moe/25g21n.png"

    presentation1: string = "Passionné par tout ce qui touche à l'informatique depuis mon adolescence"
    + ", j’ai poursuivi et obtenu un diplôme d’ingénieur à CPE Lyon et réalisé des missions en entreprise "
    + "en tant que développeur full stack. \n\n"
    
    presentation2: string = "A travers ce parcours et mes projets personnels, j’ai pu apprendre diverses technologies. Mais au-delà de ce savoir, "
    + "ce qui me passionne le plus dans l’informatique est la résolution de problèmes complexes. Pour un problème donné, j'essaye "
    + "toujours de ne pas seulement trouver une solution, mais trouver la meilleure solution. Je prête ainsi une attention "
    + "particulière à l'optimisation, à la qualité du code et aux autres bonnes pratiques de ce métier. "

    presentation3: string = "En dehors des aspects purement techniques, j'ai un grand sens de l'organisation et du travail d'équipe."

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, { width: '1000px' });

      dialogRef.afterClosed().subscribe();
    }
}