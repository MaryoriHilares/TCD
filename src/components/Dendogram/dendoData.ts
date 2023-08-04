export type TreeNode = {
    type: 'node';
    value: number;
    name: string;
    children: Tree[];
  };
  
  export type TreeLeaf = {
    type: 'leaf';
    name: string;
    value: number;
  };
  
  export type Tree = TreeNode | TreeLeaf;
  
  export const dendodata: Tree = {
    type: "node",
    name: "Crimenes",
    value: 0,
    children: [
      {
        type: "node",
        name: "Delitos Contra la Propiedad",
        value: 0,
        children: [
          { type: "leaf", name: "THEFT ", value: 90 },
          { type: "leaf", name:"BURGLARY "   , value: 12 },
          { type: "leaf", name: "MOTOR VEHICLE THEFT", value: 34 },
          { type: "leaf", name:"DECEPTIVE PRACTICE " , value: 53 },
          { type: "leaf", name:"ROBBERY" , value: 90 },
          { type: "leaf", name: "ARSON", value: 12 },
                     
        ],
      },
      {
        type: "node",
        name: "Delitos Contra las Personas",
        value: 0,
        children: [
          { type: "leaf", name: "BATTERY ", value: 34 },
          { type: "leaf", name: "ASSAULT", value: 53 },          
          { type: "leaf", name:"CRIMINAL TRESPASS" , value: 34 },
          { type: "leaf", name: " HOMICIDE ", value: 53 },
          { type: "leaf", name: "KIDNAPPING", value: 34 },
          { type: "leaf", name: "STALKING", value: 53 },          
          { type: "leaf", name:"INTIMIDATION" , value: 34 },
          { type: "leaf", name: "DOMESTIC VIOLENCE", value: 53 },          
          { type: "leaf", name: "OFFENSE INVOLVING CHILDREN ", value: 34 },
        ],
      },
      {
        type: "node",
        name: " Delitos Contra el Orden Público",
        value: 0,
        children: [          
        { type: "leaf", name: "PUBLIC PEACE VIOLATION", value: 53 },          
        { type: "leaf", name:"INTERFERENCE WITH PUBLIC OFFICER" , value: 34 },
        { type: "leaf", name: "LIQUOR LAW VIOLATION", value: 53 },
        { type: "leaf", name: "GAMBLING", value: 53 },          
        { type: "leaf", name:" OBSCENITY " , value: 34 },
        { type: "leaf", name: "PUBLIC INDECENCY", value: 53 },
        { type: "leaf", name: "HUMAN TRAFFICKING", value: 53 },          
        { type: "leaf", name:"RITUALISM" , value: 34 },
        ],
      },
      {
        type: "node",
        name: " Delitos Sexuales",
        value: 0,
        children: [
        { type: "leaf", name: "SEX OFFENSE", value: 53 },
        { type: "leaf", name: "CRIM SEXUAL ASSAULT", value: 53 },          
        { type: "leaf", name:"PROSTITUTION" , value: 34 },
        ],
      },
      {
        type: "node",
        name: " Delitos Relacionados con Drogas",
        value: 0,
        children: [
          { type: "leaf", name: "NARCOTICS OTHER", value: 53 },
          { type: "leaf", name: "NARCOTIC VIOLATION", value: 53 },        
        ],
      },
      {
        type: "node",
        name: "Otros Delitos",
        value: 0,
        children: [  
          { type: "leaf", name:"OTHER OFFENSE" , value: 34 },
          { type: "leaf", name: "CRIMINAL DAMAGE", value: 53 },  
          { type: "leaf", name:"CONCEALED CARRY LICENSE VIOLATION" , value: 34 },
          { type: "leaf", name: "NON-CRIMINAL", value: 53 },  
          { type: "leaf", name:"WEAPONS VIOLATION" , value: 34 },
          { type: "leaf", name: "NON-CRIMINAL (SUBJECT SPECIFIED)", value: 53 },  
        ],
      },
    ],
  };
  