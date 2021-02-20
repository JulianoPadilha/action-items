/* Entity */
import { ActionItem } from '../ActionItem';
import { TypeEnum } from '../enums/ActionItemType'
import { StatusEnum } from '../enums/ActionItemStatus'
import { OwnerEnum } from '../enums/ActionItemOwner'
import { PriorityEnum } from '../enums/ActionItemPriority'

const actionItemTypeMock: ActionItem = {
  title: 'Title',
  description: 'Description',
  creationDate: new Date("2021-02-04 12:00:00 GMT-0"),
  status: StatusEnum.DONE,
  type: TypeEnum.EXECUTABLE,
  owner: OwnerEnum.JUJU,
  priority: PriorityEnum.HIGH,
  assignmentDay: new Date("2021-02-04 12:00:00 GMT-0"),
  endDay: new Date("2021-02-10 12:00:00 GMT-0"),
  sprint: false,
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
      creationDate: new Date("2021-02-04 12:00:00 GMT-0"),
      status: StatusEnum.DONE,
      type: TypeEnum.EXECUTABLE,
      owner: OwnerEnum.JUJU,
      priority: PriorityEnum.HIGH,
      assignmentDay: new Date("2021-02-04 12:00:00 GMT-0"),
      endDay: new Date("2021-02-10 12:00:00 GMT-0"),
      sprint: false,
    };

    Object.keys(actionItemTypeMockFail).forEach(() => {
      expect (actionItemTypeMockFail).not.toHaveProperty('title');
    });
  });
});
