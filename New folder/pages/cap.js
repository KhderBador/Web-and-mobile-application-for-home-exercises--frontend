import { Capacitor } from '@capacitor/core';

export const apiUrl = Capacitor.getPlatform() === 'web'
  ? 'http://127.0.0.1:8000'
  : 'http://192.168.16.157:8000';