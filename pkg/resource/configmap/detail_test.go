package configmap

import (
	"github.com/karmada-io/dashboard/pkg/common/types"
	"reflect"
	"testing"

	v1 "k8s.io/api/core/v1"
	metaV1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func TestGetConfigMapDetail(t *testing.T) {
	cases := []struct {
		configMaps *v1.ConfigMap
		expected   *ConfigMapDetail
	}{
		{
			&v1.ConfigMap{
				Data: map[string]string{"app": "my-name"}, ObjectMeta: metaV1.ObjectMeta{Name: "foo"},
			},
			&ConfigMapDetail{
				ConfigMap: ConfigMap{
					TypeMeta:   types.TypeMeta{Kind: "configmap"},
					ObjectMeta: types.ObjectMeta{Name: "foo"},
				},
				Data: map[string]string{"app": "my-name"},
			},
		},
	}
	for _, c := range cases {
		actual := getConfigMapDetail(c.configMaps)
		if !reflect.DeepEqual(actual, c.expected) {
			t.Errorf("getConfigMapDetail(%#v) == \n%#v\nexpected \n%#v\n",
				c.configMaps, actual, c.expected)
		}
	}
}
