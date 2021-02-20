/* Dependencies */
import mongoose from 'mongoose';

const actionItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  creationDate: String,
  status: String,
  type: String,
  owner: Array,
  priority: String,
  assignmentDay: String,
  endDay: String
});

export default mongoose.model('actionItem', actionItemSchema);
