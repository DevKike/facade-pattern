import { JsonPlaceholderFacade } from '../modules/shared/json-placeholder/facade/JsonPlaceholderFacade';
import { JsonPlaceholderService } from '../modules/shared/json-placeholder/service/JsonPlaceholderService';

let facade = new JsonPlaceholderFacade(new JsonPlaceholderService());
facade.getUser(1).then((user) => {
  if (user) {
    console.log('User found ', user);
  } else {
    console.log('User not found');
  }
});
