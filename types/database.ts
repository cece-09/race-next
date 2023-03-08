export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      circuit: {
        Row: {
          circuit_id: number;
          country: string;
          image: string | null;
          laps: number;
          length: number;
          name: string;
        };
        Insert: {
          circuit_id?: number;
          country: string;
          image?: string | null;
          laps: number;
          length: number;
          name: string;
        };
        Update: {
          circuit_id?: number;
          country?: string;
          image?: string | null;
          laps?: number;
          length?: number;
          name?: string;
        };
      };
      driver: {
        Row: {
          bio: string;
          country: string;
          date_of_birth: string;
          driver_id: number;
          icon: string | null;
          image: string | null;
          name: string;
          number: number;
        };
        Insert: {
          bio: string;
          country: string;
          date_of_birth: string;
          driver_id?: number;
          icon?: string | null;
          image?: string | null;
          name: string;
          number: number;
        };
        Update: {
          bio?: string;
          country?: string;
          date_of_birth?: string;
          driver_id?: number;
          icon?: string | null;
          image?: string | null;
          name?: string;
          number?: number;
        };
      };
      grandprix: {
        Row: {
          circuit_id: number;
          image: string | null;
          info: string;
          name: string;
          year: number;
        };
        Insert: {
          circuit_id: number;
          image?: string | null;
          info: string;
          name: string;
          year: number;
        };
        Update: {
          circuit_id?: number;
          image?: string | null;
          info?: string;
          name?: string;
          year?: number;
        };
      };
      season: {
        Row: {
          year: number;
        };
        Insert: {
          year: number;
        };
        Update: {
          year?: number;
        };
      };
      season_team: {
        Row: {
          base: string;
          name: string;
          team_id: number;
          year: number;
        };
        Insert: {
          base: string;
          name: string;
          team_id: number;
          year: number;
        };
        Update: {
          base?: string;
          name?: string;
          team_id?: number;
          year?: number;
        };
      };
      season_team_driver: {
        Row: {
          driver_id: number;
          role: string;
          team_id: number;
          year: number;
        };
        Insert: {
          driver_id: number;
          role: string;
          team_id: number;
          year: number;
        };
        Update: {
          driver_id?: number;
          role?: string;
          team_id?: number;
          year?: number;
        };
      };
      team: {
        Row: {
          name: string;
          team_id: number;
        };
        Insert: {
          name: string;
          team_id?: number;
        };
        Update: {
          name?: string;
          team_id?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
