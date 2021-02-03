/* Dependencies */
import mongoose from 'mongoose';

const actionItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  sprintDate: String,
  sprintName: String,
  status: String,
  type: String,
  owner: String
});

export default mongoose.model('actionItem', actionItemSchema);
