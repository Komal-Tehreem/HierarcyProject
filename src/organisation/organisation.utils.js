import vp from '../assets/vp.png';
import manager from '../assets/manager.png';
import lead from '../assets/lead.png';
import representative from '../assets/representative.png';

export const data = [{
  name: 'VP of Sales',
  status: 'critical',
  img: vp,
  children: [
    {
      name: 'Manager',
      region: 'North America',
      status: 'critical',
      img: manager,
      children: [
        {
          name: 'Lead',
          region: 'Canada',
          status: 'normal',
          img: lead,
          children: [
            {
              name: 'Representative',
              region: 'Toronto',
              status: 'normal',
              img: representative,
            },
            {
              name: 'Representative',
              region: 'Vancouver',
              status: 'normal',
              img: representative,
            }
          ]
        },
        {
            name: 'Lead',
            status: 'critical',
            region: 'USA',
            img: lead,
            children: [
              {
                name: 'Representative',
                status: 'warning',
                region: 'New York',
                img: representative,
              },
              {
                name: 'Representative',
                status: 'critical',
                region: 'Dallas',
                img: representative,
              },
              {
                name: 'Representative',
                status: 'critical',
                region: 'Los Angeles',
                img: representative,
              }
            ]
          },
      ]
    },
    {
        name: 'Manager',
        region: 'Europe',
        status: 'warning',
        img: manager,
        children: [
          {
            name: 'Lead',
            region: 'Germany',
            status: 'warning',
            img: lead,
            children: [
              {
                name: 'Representative',
                region: 'Berlin',
                status: 'normal',
                img: representative,
              },
              {
                name: 'Representative',
                region: 'Frankfurt',
                status: 'critical',
                img: representative,
              }
            ]
          },
          {
              name: 'Lead',
              status: 'normal',
              region: 'Italy',
              img: lead,
              children: [
                {
                  name: 'Representative',
                  status: 'normal',
                  region: 'Milan',
                  img: representative,
                },
              ]
            },
        ]
      },
  ]
}];

export const dataManagementHeavy = [{
  name: 'VP of Sales',
  status: 'critical',
  img: vp,
  children: [
    {
      name: 'Manager',
      region: 'North America',
      status: 'critical',
      img: manager,
      children: [
        {
          name: 'Lead',
          region: 'Canada',
          status: 'normal',
          img: lead,
          children: [
            {
              name: 'Representative',
              region: 'Toronto',
              status: 'normal',
              img: representative,
            }
          ]
        },
        {
          name: 'Lead',
          region: 'Canada',
          status: 'normal',
          img: lead,
          children: [
            {
              name: 'Representative',
              region: 'Toronto',
              status: 'normal',
              img: representative,
            }
          ]
        },
        {
          name: 'Lead',
          region: 'Canada',
          status: 'normal',
          img: lead,
        },
        {
          name: 'Lead',
          region: 'Canada',
          status: 'critical',
          img: lead,
        },
        {
          name: 'Lead',
          region: 'Canada',
          status: 'critical',
          img: lead,
        },
        {
            name: 'Lead',
            status: 'critical',
            region: 'USA',
            img: lead,
            children: [
              {
                name: 'Representative',
                status: 'warning',
                region: 'New York',
                img: representative,
              },
            ]
          },
      ]
    },
    {
      name: 'Manager',
      region: 'North America',
      status: 'critical',
      img: manager,
      children: [
        {
          name: 'Lead',
          region: 'Canada',
          status: 'normal',
          img: lead,
          children: [
            {
              name: 'Representative',
              region: 'Toronto',
              status: 'normal',
              img: representative,
            }
          ]
        },
        {
          name: 'Lead',
          region: 'Canada',
          status: 'normal',
          img: lead,
          children: [
            {
              name: 'Representative',
              region: 'Toronto',
              status: 'normal',
              img: representative,
            }
          ]
        },
        {
          name: 'Lead',
          region: 'Canada',
          status: 'normal',
          img: lead,
        },
        {
          name: 'Lead',
          region: 'Canada',
          status: 'critical',
          img: lead,
        },
        {
          name: 'Lead',
          region: 'Canada',
          status: 'critical',
          img: lead,
        },
        {
          name: 'Lead',
          status: 'critical',
          region: 'USA',
          img: lead,
          children: [
            {
              name: 'Representative',
              status: 'warning',
              region: 'New York',
              img: representative,
            },
          ]
        },
      ]
    },
    {
        name: 'Manager',
        region: 'Europe',
        status: 'warning',
        img: manager,
        children: [
          {
            name: 'Lead',
            region: 'Germany',
            status: 'warning',
            img: lead,
            children: [
              {
                name: 'Representative',
                region: 'Berlin',
                status: 'normal',
                img: representative,
              },
              {
                name: 'Representative',
                region: 'Frankfurt',
                status: 'critical',
                img: representative,
              }
            ]
          },
          {
            name: 'Lead',
            status: 'normal',
            region: 'Italy',
            img: lead,
            children: [
              {
                name: 'Representative',
                status: 'normal',
                region: 'Milan',
                img: representative,
              },
            ]
          },
        ]
      },
    {
        name: 'Manager',
        region: 'Europe',
        status: 'warning',
        img: manager,
        children: [
          {
            name: 'Lead',
            region: 'Germany',
            status: 'warning',
            img: lead,
            children: [
              {
                name: 'Representative',
                region: 'Berlin',
                status: 'normal',
                img: representative,
              },
              {
                name: 'Representative',
                region: 'Frankfurt',
                status: 'critical',
                img: representative,
              }
            ]
          },
          {
            name: 'Lead',
            status: 'normal',
            region: 'Italy',
            img: lead,
            children: [
              {
                name: 'Representative',
                status: 'normal',
                region: 'Milan',
                img: representative,
              },
            ]
          },
        ]
      },
  ]
}];

export const dataManagementLean = [{
  name: 'VP of Sales',
  status: 'critical',
  img: vp,
  children: [
    {
      name: 'Manager',
      region: 'North America',
      status: 'critical',
      img: manager,
      children: [
        {
          name: 'Lead',
          region: 'Canada',
          status: 'normal',
          img: lead,
          children: [
            {
              name: 'Representative',
              region: 'Toronto',
              status: 'normal',
              img: representative,
            },
            {
              name: 'Representative',
              region: 'Vancouver',
              status: 'normal',
              img: representative,
            },
            {
              name: 'Representative',
              region: 'Toronto',
              status: 'normal',
              img: representative,
            },
            {
              name: 'Representative',
              region: 'Vancouver',
              status: 'normal',
              img: representative,
            },
            {
              name: 'Representative',
              region: 'Toronto',
              status: 'normal',
              img: representative,
            },
            {
              name: 'Representative',
              region: 'Vancouver',
              status: 'normal',
              img: representative,
            }
          ]
        },
      ]
    },
    {
        name: 'Manager',
        region: 'Europe',
        status: 'warning',
        img: manager,
        children: [
          {
            name: 'Lead',
            region: 'Germany',
            status: 'warning',
            img: lead,
            children: [
              {
                name: 'Representative',
                region: 'Berlin',
                status: 'normal',
                img: representative,
              },
              {
                name: 'Representative',
                region: 'Frankfurt',
                status: 'critical',
                img: representative,
              },
              {
                name: 'Representative',
                region: 'Berlin',
                status: 'normal',
                img: representative,
              },
              {
                name: 'Representative',
                region: 'Frankfurt',
                status: 'critical',
                img: representative,
              },
              {
                name: 'Representative',
                region: 'Berlin',
                status: 'normal',
                img: representative,
              },
              {
                name: 'Representative',
                region: 'Frankfurt',
                status: 'critical',
                img: representative,
              }
            ]
          },
          {
              name: 'Lead',
              status: 'normal',
              region: 'Italy',
              img: lead,
              children: [
                {
                  name: 'Representative',
                  status: 'normal',
                  region: 'Milan',
                  img: representative,
                },
                {
                  name: 'Representative',
                  status: 'normal',
                  region: 'Milan',
                  img: representative,
                },
                {
                  name: 'Representative',
                  status: 'normal',
                  region: 'Milan',
                  img: representative,
                },
                {
                  name: 'Representative',
                  status: 'normal',
                  region: 'Milan',
                  img: representative,
                },
                {
                  name: 'Representative',
                  status: 'normal',
                  region: 'Milan',
                  img: representative,
                }
              ]
            },
        ]
      },
  ]
}];
