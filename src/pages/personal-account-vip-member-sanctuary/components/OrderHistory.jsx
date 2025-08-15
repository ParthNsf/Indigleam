import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OrderHistory = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const orders = [
    {
      id: "LJ-2024-0847",
      date: "2024-08-10",
      status: "delivered",
      total: 2850.00,
      items: [
        {
          name: "Celestial Diamond Necklace",
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
          price: 2850.00,
          quantity: 1
        }
      ],
      tracking: "Delivered on Aug 12, 2024",
      artisanNote: "Handcrafted by Master Artisan Elena Rodriguez with ethically sourced diamonds"
    },
    {
      id: "LJ-2024-0823",
      date: "2024-07-28",
      status: "in_progress",
      total: 4200.00,
      items: [
        {
          name: "Custom Engagement Ring",
          image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
          price: 4200.00,
          quantity: 1
        }
      ],
      tracking: "Currently being crafted - Expected completion: Aug 20, 2024",
      artisanNote: "Custom design in progress with Master Jeweler Marcus Chen"
    },
    {
      id: "LJ-2024-0801",
      date: "2024-07-15",
      status: "shipped",
      total: 1650.00,
      items: [
        {
          name: "Pearl Drop Earrings",
          image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
          price: 825.00,
          quantity: 2
        }
      ],
      tracking: "In transit - Expected delivery: Aug 16, 2024",
      artisanNote: "Featuring Tahitian pearls selected by our pearl specialist"
    },
    {
      id: "LJ-2024-0756",
      date: "2024-06-22",
      status: "delivered",
      total: 3200.00,
      items: [
        {
          name: "Vintage Gold Bracelet",
          image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
          price: 3200.00,
          quantity: 1
        }
      ],
      tracking: "Delivered on Jun 25, 2024",
      artisanNote: "Restored vintage piece from our heritage collection"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Orders', count: orders?.length },
    { key: 'delivered', label: 'Delivered', count: orders?.filter(o => o?.status === 'delivered')?.length },
    { key: 'in_progress', label: 'In Progress', count: orders?.filter(o => o?.status === 'in_progress')?.length },
    { key: 'shipped', label: 'Shipped', count: orders?.filter(o => o?.status === 'shipped')?.length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-success/10 text-success border-success/20';
      case 'shipped': return 'bg-primary/10 text-primary border-primary/20';
      case 'in_progress': return 'bg-warning/10 text-warning border-warning/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return 'CheckCircle';
      case 'shipped': return 'Truck';
      case 'in_progress': return 'Clock';
      default: return 'Package';
    }
  };

  const filteredOrders = selectedFilter === 'all' 
    ? orders 
    : orders?.filter(order => order?.status === selectedFilter);

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h2 className="text-xl font-playfair font-semibold text-foreground mb-4 sm:mb-0">Order History</h2>
        <div className="flex flex-wrap gap-2">
          {filters?.map((filter) => (
            <button
              key={filter?.key}
              onClick={() => setSelectedFilter(filter?.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter?.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              }`}
            >
              {filter?.label} ({filter?.count})
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        {filteredOrders?.map((order) => (
          <div key={order?.id} className="border border-border rounded-xl p-6 hover:luxury-shadow-hover transition-all duration-300">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
              <div className="flex items-center gap-4 mb-4 lg:mb-0">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-foreground">Order #{order?.id}</h3>
                  <p className="text-sm text-muted-foreground">Placed on {new Date(order.date)?.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
                <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(order?.status)}`}>
                  <div className="flex items-center gap-2">
                    <Icon name={getStatusIcon(order?.status)} size={14} />
                    <span className="capitalize">{order?.status?.replace('_', ' ')}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-semibold text-foreground">${order?.total?.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">{order?.items?.length} item{order?.items?.length > 1 ? 's' : ''}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-medium text-foreground mb-3">Items</h4>
                <div className="space-y-3">
                  {order?.items?.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <Image 
                          src={item?.image} 
                          alt={item?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground">{item?.name}</h5>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Qty: {item?.quantity}</span>
                          <span>${item?.price?.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Tracking & Artisan Details</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={16} className="text-primary mt-1" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{order?.tracking}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="User" size={16} className="text-accent mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{order?.artisanNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
              <Button variant="outline" size="sm" iconName="Eye" iconPosition="left">
                View Details
              </Button>
              {order?.status === 'delivered' && (
                <>
                  <Button variant="outline" size="sm" iconName="RotateCcw" iconPosition="left">
                    Reorder
                  </Button>
                  <Button variant="outline" size="sm" iconName="Star" iconPosition="left">
                    Write Review
                  </Button>
                </>
              )}
              {order?.status === 'shipped' && (
                <Button variant="outline" size="sm" iconName="Truck" iconPosition="left">
                  Track Package
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {filteredOrders?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No orders found</h3>
          <p className="text-muted-foreground mb-6">
            {selectedFilter === 'all' ? "You haven't placed any orders yet." 
              : `No ${selectedFilter?.replace('_', ' ')} orders found.`}
          </p>
          <Link to="/shop-collections-interactive-jewelry-gallery">
            <Button variant="default" iconName="Gem" iconPosition="left">
              Explore Collections
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;