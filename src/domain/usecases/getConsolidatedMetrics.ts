/* Entities */
import { Metrics } from '../entities/Metrics';

/* Gateway */
import MetricsGateway from '../gateways/Metrics';

async function getConsolidatedMetrics(
  metricsGateway: MetricsGateway
): Promise<Metrics> {
  try {
    return await  metricsGateway.getConsolidatedMetrics();
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export default getConsolidatedMetrics;