import axios from "axios";
import React, { useState, useEffect } from "react";

export interface DataItem {
    id: number;
    Etunimi: string; 
    Sukunimi: string; 
    Sahkoposti: string;
    Puhelin: number;
    Tyotehtava: string;
    Palkka: Float32Array;
  }

