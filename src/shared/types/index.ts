export interface IIssue {
  key: string;
  date_created: string;
  status: string;
  date_started_by_designer?: string;
  date_finished_by_designer?: string;
  received_from_client?: number;
  send_to_project_manage?: number;
}

export interface ITask extends IIssue {
  profit: number;
  expense: number;
}

export interface IDesigner {
  avatar: string;
  username: string;
  email: string;
  thumbnails: {
    avatar: string;
    avatar_2x: string;
    avatar_webp: string;
    avatar_webp_2x: string;
  };
  issues: ITask[];
}

export interface IDesignerResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IDesigner[];
}

export interface IComment {
  id: number;
  issue: string;
  designer: {
    avatar: string;
    username: string;
    thumbnails: {
      avatar: string;
      avatar_2x: string;
      avatar_webp: string;
      avatar_webp_2x: string;
    };
  };
  date_created: string;
  message: string;
}
