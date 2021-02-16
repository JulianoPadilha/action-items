/* Entities */
import { Metrics } from '../../domain/entities/Metrics';

/* Gateways */
import MetricsGateway from '../../domain/gateways/Metrics';

/* Model */
import ActionItemModel from '../../domain/model/actionItemModel';

class MetricsInterface implements MetricsGateway {
  async getConsolidatedMetrics(): Promise<any> {
    const queries = [
      { type: 'Executável' },
      { type: 'Boa Prática' },
      { status: 'TODO' },
      { status: 'WIP' },
      { status: 'DONE' },
      { status: 'BLOCKED' },
      { status: 'CANCELED' },
      { priority: 'Low' },
      { priority: 'Medium' },
      { priority: 'High' },
      { owner: 'Ninguém' },
    ];

    const results: any = queries.map(async query => {
      const result: number = await ActionItemModel.countDocuments(query).exec();
      return { ...query, quantity: result };
    });
    return Promise.all(results);
  }
}

export default new MetricsInterface();
