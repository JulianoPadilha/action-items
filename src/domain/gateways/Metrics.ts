/* Entities */
import { Metrics } from '../entities/Metrics';

export default abstract class MetricsGateway {
  abstract getConsolidatedMetrics(): Promise<Metrics>;
}
