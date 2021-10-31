module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      email: String,
      password: String,
    },
    { timestamps: false }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("users", schema);;
};
