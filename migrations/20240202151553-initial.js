module.exports = {
  async up(db) {
    await db.collection("amenities").insertMany([
      {
        name: "Toilet",
      },
      {
        name: "Parking",
      },
    ])
  },

  async down(db) {
    await db.collection("amenities").deleteMany({})
  },
}
