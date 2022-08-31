var encrypt = require ('mongoose-encryption')

module.exports = mongoose => {
  var schema = new mongoose.Schema(
    {
      userName: String,
      password: String,
      published: Boolean
    },
    { timestamps: true }
  );

const secret = "Thisisaverylonglittlesecret.";
schema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const User = mongoose.model("user", schema);
  return User;
};