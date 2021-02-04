/* Entity */
import { ActionItem } from './ActionItem';
import { TypeEnum } from './enums/ActionItemType'
import { StatusEnum } from './enums/ActionItemStatus'

const actionItemTypeMock: ActionItem = {
  title: 'Title',
  description: 'Description',
  sprintDate: new Date("2021-02-04 12:00:00 GMT-0"),
  sprintName: 'Sprint name',
  status: StatusEnum.done,
  type: TypeEnum.executable,
  owner: 'Joe Doe',
}

describe('ActionItem Entity', () => {
  it('should entity have all the properties', () => {
    Object.keys(actionItemTypeMock).forEach(key => {
      expect(actionItemTypeMock).toHaveProperty(key);
    });
  });

  it('should entity have at least one property missing', () => {
    //@ts-ignore
    const actionItemTypeMockFail: ActionItem = {
      description: 'Description',
      sprintDate: new Date("2021-02-04 12:00:00 GMT-0"),
      sprintName: 'Sprint name',
      status: StatusEnum.done,
      type: TypeEnum.executable,
      owner: 'Joe Doe',
    };

    Object.keys(actionItemTypeMockFail).forEach(() => {
      expect (actionItemTypeMockFail).not.toHaveProperty('title');
    });
  });
});
