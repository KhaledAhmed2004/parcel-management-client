const AllDeliveryMan = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">All Delivery Men</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Parcels Delivered</th>
              <th>Average Review</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>123-456-7890</td>
              <td>50</td>
              <td>4.5</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>987-654-3210</td>
              <td>30</td>
              <td>4.0</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>555-123-4567</td>
              <td>20</td>
              <td>3.8</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>555-123-4567</td>
              <td>20</td>
              <td>3.8</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>555-123-4567</td>
              <td>20</td>
              <td>3.8</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>555-123-4567</td>
              <td>20</td>
              <td>3.8</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>555-123-4567</td>
              <td>20</td>
              <td>3.8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveryMan;
