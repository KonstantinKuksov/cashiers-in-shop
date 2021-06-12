import { DataTypes, ModelDefined } from 'sequelize';
import { IShopAttributes, IShopCreationAttributes } from '../models';
import { sequelize } from '../db';

const Shop: ModelDefined<IShopAttributes, IShopCreationAttributes> =
  sequelize.define(
    'Shop',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      locality: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'shops',
    }
  );

export default Shop;
