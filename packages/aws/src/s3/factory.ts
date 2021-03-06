import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { S3 } from "./class";

/**
 *
 * @param serviceName
 * @param region
 * @param environment
 * @returns
 */
export const createS3Service = (
  serviceName: ServiceEnum,
  region: string,
  environment: TEnvironment
) => new S3(serviceName, region, environment);
