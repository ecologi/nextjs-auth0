import { NextApiRequest, NextApiResponse } from 'next';
import { TokenSetParameters } from 'openid-client';
import { ISessionStore } from '../session/store';
export default function setSessionHandler(sessionStore: ISessionStore): (req: NextApiRequest, res: NextApiResponse<any>, tokenSetParameters: TokenSetParameters) => Promise<void>;
