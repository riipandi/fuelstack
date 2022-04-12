import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';

const config: any = {
  type: VersioningType.HEADER,
  defaultVersion: VERSION_NEUTRAL,
  header: 'API-Version',
};

export default config;
